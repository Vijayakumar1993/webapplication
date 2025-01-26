export function validate(event,instance){
    const data = event.target.value
    console.log(`${data} ${data.length}`)
    instance.setState({valid:!data.length>0})
}