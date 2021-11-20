function emailLength(body)
{
    return body.length < 4096
}

module.exports = emailLength