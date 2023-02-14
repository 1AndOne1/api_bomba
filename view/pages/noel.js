const head = require("../components/head")
const footer = require("../components/footer")
const header = require("../components/header")

const noel = `

${head('Noel')}
<body>
    ${header}
    <h1>Noel</h1>
    <ul>
        <li>Age = 18</li>
        <li>Magic skills = true</li>
        <li>Sword skills = false</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = noel;