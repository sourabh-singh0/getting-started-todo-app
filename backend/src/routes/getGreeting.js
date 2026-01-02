const GREETING = '-Hello world!- How are You';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
