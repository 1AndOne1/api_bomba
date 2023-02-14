const head = require("../components/head")
const footer = require("../components/footer")
const header = require("../components/header")

const main_page = `

${head("Home page")}
<body>
<div classs = 'container>'
    ${header}
    <div class = 'main'>
    <h2>Characters</h2>
    <ul>
        <li><a href ='../home/asta'>Asta</a></li>
        <li><a href ='../home/noel'>Noel Silver</a></li>
        <li><a href ='../home/juno'>Juno</a></li>
    </ul>
    </div>
    ${footer}
</div>
</body>
</html>
`
module.exports = main_page;
