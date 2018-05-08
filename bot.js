const klasa = require("klasa");

const client = new klasa.Client({
    clientOptions: {
        fetchAllMembers: false,
    },
    prefix: "-",
    cmdPrompt: true,
    cmdEditing: true
});

client.login("Mzc5MTc4ODMyNzk3NjMwNDc0.DOmZqQ.XQ57PSiFsvLbTmpIOxf6Ku8W10c")