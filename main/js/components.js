/*
<div class="content"> 
    <h2> Our Mission </h2>
    <p> subtext</p>
    <div class="card">
        <h3>Advantages of Blockchain Gaming </h3>
            <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
            </ul>
    </div>
    <div class="card">
        <h3>Problem</h3>
            <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
            </ul>
    </div>
    <div class="card">
        <h3>Solution </h3>
            <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
            </ul>
    </div>
</div>
*/


function missionCreator() {
    //creating all necessary elements for this section
    
    const content = document.createElement('div');
    const title = document.createElement('h2');
    const subtext = document.createElement('p');
    const card1 = document.createElement('div');
    const card1Title = document.createElement('h4');
    const ul1 = document.createElement('ul');
    const ul1Li1 = document.createElement('li');
    const ul1Li2 = document.createElement('li');
    const ul1Li3 = document.createElement('li');    
    const card2 = document.createElement('div');
    const card2Title = document.createElement('h4');
    const ul2 = document.createElement('ul');
    const ul2Li1 = document.createElement('li');
    const ul2Li2 = document.createElement('li');
    const ul2Li3 = document.createElement('li');
    const card3 = document.createElement('div');
    const card3Title = document.createElement('h4');
    const ul3 = document.createElement('ul');
    const ul3Li1 = document.createElement('li');
    const ul3Li2 = document.createElement('li');
    const ul3Li3 = document.createElement('li');

    //add classes to elements
    content.classList.add('content');
    content.classList.add('is-medium');

    //content for elements
    title.textContent = 'Our Mission:'
    subtext.textContent = 'blockchain gaming AI decentralization fixed-supply bonding curve mining governance interest dividends defi liquidity';
    card1Title.textContent = 'Advantages of Using Blockchain for Gaming';
    // card2Title.textContent = 'The Problem';
    // card3Title.textContent = 'The Solution';
    ul1Li1.textContent = 'filler one';
    ul1Li2.textContent = 'filler two';
    ul1Li3.textContent = 'filler three';
    // ul2Li1.textContent = 'filler one';
    // ul2Li2.textContent = 'filler two';
    // ul2Li3.textContent = 'filler three';
    // ul3Li1.textContent = 'filler one';
    // ul3Li2.textContent = 'filler two';
    // ul3Li3.textContent = 'filler three';

    //appending elements to make tree-like structure
    
    content.appendChild(title);
    content.appendChild(subtext);
    content.appendChild(card1);
    content.appendChild(card2);
    content.appendChild(card3);
    card1.appendChild(card1Title);
    card2.appendChild(card2Title);
    card3.appendChild(card3Title);
    card1Title.appendChild(ul1);
    card2Title.appendChild(ul2);
    card3Title.appendChild(ul3);
    ul1.appendChild(ul1Li1);
    ul1.appendChild(ul1Li2);
    ul1.appendChild(ul1Li3);
    // ul2.appendChild(ul2Li1);
    // ul2.appendChild(ul2Li2);
    // ul2.appendChild(ul2Li3);
    // ul3.appendChild(ul3Li1);
    // ul3.appendChild(ul3Li2);
    // ul3.appendChild(ul3Li3);

    return content;

};

const tabContainer = document.querySelector('.tab-box');
tabContainer.appendChild(missionCreator());
