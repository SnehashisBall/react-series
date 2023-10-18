/*function customRender(reactElement,mainContainer){

const domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.children;
domElement.setAttribute('href',reactElement.props.href);
domElement.setAttribute('target',reactElement.props.target);

mainContainer.appendChild(domElement);
} */

function customRender(reactElement,mainContainer){

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;

    for(const prop in reactElement.props){

        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(domElement);
}
/* React converts all the functions and JSX into objects.
Then these objects are used to generate TREE after that the Element gets
 Injected  into DOM

*/

const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:"_blank"
    },
    children:'Click me to visit google!!!'
}

const mainContainer=document.getElementById("root")

customRender(reactElement,mainContainer)