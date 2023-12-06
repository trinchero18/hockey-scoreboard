export const formatTime = (seconds) => {
    const time = new Date(seconds * 1000).toISOString().slice(14, 19);
    return time;
};