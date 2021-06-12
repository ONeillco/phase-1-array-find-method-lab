

function superbowlWin(){
    const celebrate = record.find(record => record.result === "W")
    if (celebrate) {
        return celebrate.year;
    } else {
        return undefined;
    }
}
