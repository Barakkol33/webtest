const formatExecutionDetails = (item) => {
    return `${item.user}, ${new Date(item.date).toLocaleDateString()}, ${item.var1}, ${item.var2}`;
};