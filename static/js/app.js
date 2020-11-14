function process() {
    var dropdownMenu = d3.select("#selDataset");
    var targetId = dropdownMenu.property("value");

    console.log("id", targetId);
};

//initializing metadata
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
    }

    }

    function buildCharts(idx) { 
        d3.json("samples.json").then((data) => {
            var samples = data.samples;
            var resultArray = samples.filter(sampleObj => sampleObj.id == idx);
            var result = resultArray[0];
            console.log(result);
            var sampleValues = result.sample_values;
            var filteredValues = sampleValues.slice(0, 10);
            filteredValues = filteredValues.reverse();
            var otuIds = result.otu_ids;
            var otuLabels = result.otu_labels;
//metadata variables being called
            var metadata = data.metadata;
            var metaArray = metadata.filter(sampleObj => sampleObj.id == idx);
            var metaResult = metaArray[0];
            var wfreq = metaResult.wfreq;
            console.log(sampleValues);
            console.log(filteredValues);
            console.log(otuIds);
            console.log(otuLabels);
            console.log(wfreq);
        }
    }
