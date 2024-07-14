import os
from pathlib import Path
from typing import Self

from pydantic import BaseModel

DB_PATH = Path(__file__).parent / ".." / "db"


class File(BaseModel):
    id: str
    name: str = ""

    @property
    def content(self) -> bytes:
        with open(str(DB_PATH / "executions" / self.id), "rb") as file:
            return file.read()

    def model_post_init(self, __context):
        self.name = str(Path(self.id).name)


class Job(BaseModel):
    id: str
    files: list[File]

    @classmethod
    def from_directory(cls, execution_id, directory: Path) -> Self:
        job_id = directory.name
        return cls(id=job_id,
                   files=[File(id=f"{execution_id}/{job_id}/{file.name}")
                          for file in directory.iterdir()])


class Execution(BaseModel):
    id: str
    jobs: list[Job]

    @classmethod
    def from_directory(cls, directory: Path) -> Self:
        execution_id = directory.name
        jobs = [Job.from_directory(execution_id, job_dir) for job_dir in directory.iterdir()]
        return cls(id=execution_id, jobs=jobs)


def get_executions():
    return [Execution.from_directory(directory) for directory in (DB_PATH / "executions").iterdir()]


def get_execution_details(execution_id: str) -> Execution:
    return [Execution.from_directory(directory) for directory in (DB_PATH / "executions").iterdir()
            if directory.name == execution_id][0]


def get_executions_ids():
    return [directory.name for directory in (DB_PATH / "executions").iterdir()]


def get_execution_jobs_ids(execution_id: str) -> list[str]:
    return [job.id for job in get_execution_details(execution_id).jobs]


def get_job(execution_id: str, job_id: str) -> Job:
    return Job.from_directory(execution_id, DB_PATH / "executions" / execution_id / job_id)


def get_job_file_content(execution_id: str, job_id: str, file_name: str) -> bytes:
    return File(id=f"{execution_id}/{job_id}/{file_name}").content
