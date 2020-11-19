function process() {
    var dropdownMenu = d3.select("#selDataset");
    var targetId = dropdownMenu.property("value");

    console.log("id", targetId);
};

//initializing metadata//
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

                //bar chart
                let trace1 = {
                    x: filteredValues,
                    y: [`OTU ${otuIds[0]}`, `OTU ${otuIds[1]}`, `OTU ${otuIds[2]}`, `OTU ${otuIds[3]}`, `OTU ${otuIds[4]}`,
                    `OTU ${otuIds[5]}`, `OTU ${otuIds[6]}`, `OTU ${otuIds[7]}`, `OTU ${otuIds[8]}`, `OTU ${otuIds[9]}`],
                    text: otuLabels,
                    type: "bar",
                    orientation: "h",
                };

                let traces = [trace1];

                let layout = {
                    title: "Top 10 Microbe Speccies"
                };

                Plotly.newPlot("bar", traces, layout);
                //bubble chart
                let trace2 = {
                    x: otuIds,
                    y: sampleValues,
                    text: otuLabels,
                    mode: 'markers',
                    marker: {
                        size: sampleValues,
                        color: otuIds,
                        colorscale: "Earth",
                    }
                };
                let bubble = [trace2];

                let layout2 = {
                    title: "Frequency of Microbial Species",
                    xaxis: {
                        title: "OTU Id"
                    },
                };

                Plotly.newPlot("bubble", bubble, layout2);


                console.log(wfreq);

            })}
        init();
        
