


function fetchDiseaseInfo() {
    const diseaseName = document.getElementById('diseaseInput').value.trim().toLowerCase(); // Convert input to lowercase
    const responseArea = document.getElementById('responseArea');

    if (!diseaseName) {
        // Handle empty input
        responseArea.innerHTML = `<p>Ask me about the disease.</p>`;
        return;  // Prevent further code execution
    }

    // Search for disease info case-insensitively by converting the keys of diseasesData to lowercase
    const diseaseInfo = getDiseaseInfo(diseaseName);

    responseArea.innerHTML = ''; // Clear previous results

    if (diseaseInfo) {
        responseArea.innerHTML += `
            <div class="response-section overview">
                <h3>Overview:</h3>
                <p>${diseaseInfo.overview}</p>
            </div>
            <div class="response-section symptoms">
                <h3>Symptoms:</h3>
                <ul>${diseaseInfo.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}</ul>
            </div>
            <div class="response-section prevention">
                <h3>Prevention:</h3>
                <ul>${diseaseInfo.prevention.map(method => `<li>${method}</li>`).join('')}</ul>
            </div>
            <div class="response-section precautions">
                <h3>Precautions:</h3>
                <ul>${diseaseInfo.precautions.map(precaution => `<li>${precaution}</li>`).join('')}</ul>
            </div>
            <div class="response-section medicines">
                <h3>Medicines:</h3>
                <ul>${diseaseInfo.medicines.map(medicine => `<li>${medicine}</li>`).join('')}</ul>
            </div>`;
    } else {
        responseArea.innerHTML = `<p>No information found for "${diseaseName}". Please check the spelling or try another disease.</p>`;
    }
}

// Update getDiseaseInfo to handle case-insensitive lookup
function getDiseaseInfo(diseaseName) {
    // Convert all disease names to lowercase for comparison
    const diseasesDataLower = Object.keys(diseasesData).reduce((acc, key) => {
        acc[key.toLowerCase()] = diseasesData[key];
        return acc;
    }, {});

    return diseasesDataLower[diseaseName] || null;
}
