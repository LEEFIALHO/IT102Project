
function assignedScore(score) {

    // I created this function to check a student's score.
    // The program starts with the highest grade first.

    if (score >= 90) {
        return "Wow! You scored an A!";
    } else if (score >= 80) {
        return "Good job! You scored a B!";
    } else if (score >= 70) {
        return "You scored a C!";
    } else if (score >= 60) {
        return "You scored a D!";
    } else {
        return "You scored an F!";
    }
}

// I used an alert to show the final grade.
alert(assignedScore(92));
