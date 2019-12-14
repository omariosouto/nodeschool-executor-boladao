const childProcess = require('child_process');

const languages = new Map();


languages.set('python', (codeString) => {
    return {
        start: 'python',
        args: [
            '-c',
            codeString
        ]
    }
})

languages.set('javascript', (codeString) => {
    return {
        start: 'node',
        args: [
            '-p',
            codeString,
        ]
    }
})


// console.log(executado.stdout);

function executor(language, codeString) {
    const spawnObject = languages.get(language)(codeString);

    // console.log(language, languages.get(language).toString())
    const executado = childProcess.spawnSync(
        spawnObject.start,
        spawnObject.args,
        {
            encoding: 'utf8'
        }
    );
    console.log(executado.stdout)
}


// ============================================================


executor('javascript', `
    function soma(n1,n2) {
        return n1 + n2
    }


    console.log(soma(100,100))
`)

executor('python', `

import this
print('Alo alo w brazil pythoneiro')
`);
