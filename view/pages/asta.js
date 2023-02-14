const head = require("../components/head")
const footer = require("../components/footer")
const header = require("../components/header")

const asta = `

${head('Asta')}

<body>
    ${header}
    <h1>Asta</h1>
    <ul>
        <li>Age = 18</li>
        <li>Magic skills = false</li>
        <li>Sword skills = true</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = asta;