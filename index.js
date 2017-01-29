var companies = [
    {
        name: 'test5',
        percent: .3,
        requests: '0'
    },
    {
        name: 'test',
        percent: .1,
        requests: '0'
    },
    {
        name: 'test4',
        percent: .25,
        requests: '0'
    },
    {
        name: 'test2',
        percent: .15,
        requests: '0'
    },
    {
        name: 'test3',
        percent: .2,
        requests: 0
    }
];

function init (arrOfCompanies) {

    // sort comapnies array.
    arrOfCompanies.sort((companyOne, companyTwo) => companyOne.percent - companyTwo.percent);

    // add calculation values.
    arrOfCompanies[0].value = (arrOfCompanies[0].percent); 
    for (var i = 1; i < arrOfCompanies.length; i++) {
        arrOfCompanies[i].value = (arrOfCompanies[i].percent) + arrOfCompanies[i - 1].value;  
    }

    return arrOfCompanies;

}

function rand (arrOfCompanies) {
    var num = Math.random();
    
    for (var i = 0; i < arrOfCompanies.length; i++) {
        if (i === arrOfCompanies.length - 1){
            arrOfCompanies[i].requests++;
            return;
        }

        if (num <= arrOfCompanies[i].value) {
            arrOfCompanies[i].requests++;
            return;
        }
    }

}
    

function test (cases) {

    var arrOfCompanies = init(companies);

    for (let i = 0; i < cases; i++) {
        rand(arrOfCompanies);
    }

    // print test results.

    console.log('\n-------------- Test Results ---------------');
    console.log('\nTest Cases: ', cases);
    console.log('\nNumber of companies: ', arrOfCompanies.length, '\n');
    for (let i = 0; i < arrOfCompanies.length; i++) {
        console.log('Company Name: ', arrOfCompanies[i].name, 
            '\tDefined Percentages: ', arrOfCompanies[i].percent,
            '\tNumber of requests: ', arrOfCompanies[i].requests,
        '\tCalculated Percentage: ', Math.round((arrOfCompanies[i].requests * 100) / cases), '%');
    }
    console.log('\n---------- End of Test Results ------------');

}

test(1000000);
