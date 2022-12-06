const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', getData)

function getData(){
    fetch('https://realprashantbhandari.github.io/json_data/data.json')
    .then(res => {
        var status = res.status
        document.getElementById('status').textContent = "Response Status: " + status
        return res.json();
    }).then(data => {
        console.log(data.degreeData)
        document.getElementById('msg').textContent = "Data (check console for data)"
        document.getElementById('count').textContent = "Degree Count: " + data.degreeData.length
    }).catch((err) => {
        console.log("Rejected: " + err)
        document.getElementById('msg').textContent = "Failed (check console for error)"
    })
}
