function validateSubject(subject)
{
    if (subject.indexOf("\n") == -1)
    {
        return true
    }
    return false
}

module.exports = validateSubject