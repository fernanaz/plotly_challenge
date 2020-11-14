function process() {
    var dropdownMenu = d3.select("#selDataset");
    var targetId = dropdownMenu.property("value");

    console.log("id", targetId);
};

function Metadata(sample){
    d3.json("samples.json").then((data)=> {

        var metadata = data.metadata;

        var firstValueList = metadata.filter(sampleObj => sampleObj.id == sample);

        var metaResult = firstValueList[0];

        var demoCard = d3.select('#sample-metadata');
        demoCard.html("");

        Object.entries(metaResult).forEach(([key, value]) => {
            demoCard.append('h5').text(`${key}:${value}`)

        });

    })




    }
