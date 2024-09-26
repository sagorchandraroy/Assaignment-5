document.getElementById('donate-n')
.addEventListener('click', function (event) {
    event.preventDefault();

    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);
    const donateBlance = parseFloat(document.getElementById('donate').innerText);
    const nohakhali = parseFloat(document.getElementById("donete-input").value);


    if (!isNaN(nohakhali) && nohakhali >= 0) {

        const donete = mainBlance- nohakhali;
        const mainBlanceElement = document.getElementById('main-blance')
        mainBlanceElement.innerText = donete;
    
        const doneteAmount = nohakhali + donateBlance;
        const donateBlanceElement = document.getElementById('donate')
        donateBlanceElement.innerText = doneteAmount;
        const modal = document.getElementById('my_modal_1');
            if (modal) {
                modal.showModal();
            }
        }



     else{
      alert('Enter valid Amount');
        }
        const historyItem = document.createElement("div");
        historyItem.className =
        "bg-white p-3 rounded-md border-1-2 border-indigo-500 shadow-md";
        historyItem.innerHTML = `
        <h2 class="text-2xl font-semibold"> Donet: ${nohakhali}  Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <p> Date: ${new Date().toLocaleDateString()} </p>
        `;
        
        const historyContainer = document.getElementById('history');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
        })
        

        document.getElementById('f')
.addEventListener('click', function (event) {
    event.preventDefault();


    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);
    const donateBlanceFeni = parseFloat(document.getElementById('donate-2').innerText);
    const feni = parseFloat(document.getElementById("donete-input-2").value);


    if (!isNaN(feni) && feni >= 0) {

        const doneteFeni = mainBlance- feni;
        const mainBlanceElement = document.getElementById('main-blance')
        mainBlanceElement.innerText = doneteFeni;
    
        const doneteAmountFeni = feni + donateBlanceFeni;
        const donateBlanceElement = document.getElementById('donate-2')
        donateBlanceElement.innerText = doneteAmountFeni;
        const modal = document.getElementById('my_modal_1');
            if (modal) {
                modal.showModal();
    
        }
    }



    if (!isNaN(feni) && feni >= 0) {

        const doneteFeni = mainBlance- feni;
        const mainBlanceElement = document.getElementById('main-blance')
        mainBlanceElement.innerText = doneteFeni;
    
        const doneteAmountFeni = feni + donateBlanceFeni;
        const donateBlanceElement = document.getElementById('donate-2')
        donateBlanceElement.innerText = doneteAmountFeni;
        const modal = document.getElementById('my_modal_1');
            if (modal) {
                modal.showModal();
    
        }
    }




    else{
        alert('Enter valid Amount');
    }
    
    const historyItem = document.createElement("div");
    historyItem.className =
    "bg-white p-3 rounded-md border-1-2 border-indigo-500 shadow-md";
    historyItem.innerHTML = `
    <h2 class="text-2xl font-semibold"> Donet: ${feni}Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
    <p> Date: ${new Date().toLocaleDateString()} </p>
    `;
    
    const historyContainer = document.getElementById('history');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    
    })



    document.getElementById('aid')
.addEventListener('click', function (event) {
    event.preventDefault();


    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);
    const donateBlanceAid = parseFloat(document.getElementById('donate-3').innerText);
    const aid = parseFloat(document.getElementById("donete-input-3").value);

    // 2nd work calculated


    if (!isNaN(aid) && aid >= 0) {

    const doneteaid = mainBlance- aid;
    const mainBlanceElement = document.getElementById('main-blance')
    mainBlanceElement.innerText = doneteaid;

    const doneteAmountAid = aid + donateBlanceAid;
    const donateBlanceElement = document.getElementById('donate-3')
    donateBlanceElement.innerText = doneteAmountAid;
    const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();

    }
}



else{
    alert('Enter valid Amount');
}
const historyItem = document.createElement("div");
historyItem.className =
"bg-white p-3 rounded-md border-1-2 border-indigo-500 shadow-md";
historyItem.innerHTML = `
<h2 class="text-2xl font-semibold"> Donet: ${aid}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
<p> Date: ${new Date().toLocaleDateString()} </p>
`;

const historyContainer = document.getElementById('history');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})

// history function
const historyButton = document.getElementById('history-btn');
historyButton.addEventListener('click', function(){
document.getElementById('history').classList.remove("hidden");
document.getElementById('content-hidden').classList.add("hidden")
document.getElementById('history-btn').classList.add('bg-green-500')
document.getElementById('donation-btn').classList.remove("bg-green-500");

})

// donate funtion

const donateButton = document.getElementById('donation-btn');
donateButton.addEventListener('click', function(){
document.getElementById('history').classList.add("hidden");
document.getElementById('content-hidden').classList.remove("hidden")
document.getElementById('donation-btn').classList.add('bg-green-500')
document.getElementById('history-btn').classList.remove("bg-green-500");

})

// blog 
const button = document.getElementById('blog-button');
button.addEventListener('click', function(){
    window.location.href = 'blog.html';
})
