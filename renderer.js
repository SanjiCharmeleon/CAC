//runs the web page
//Does not run Node.js (main.js runs Node.js)

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`


const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong' if the console is open
}
  
func()