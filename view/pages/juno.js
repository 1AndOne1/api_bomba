const head = require("../components/head")
const footer = require("../components/footer")
const header = require("../components/header")

const juno = `

${head('Juno')}

<body>
    ${header}

    <h1>Juno</h1>
    <ul>
        <li>Age = 19</li>
        <li>Magic skills = true</li>
        <li>Sword skills = true</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = juno;