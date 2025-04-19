// BMI Calculator functionality
export function bmiCalculator() {
	const bmiForm = document.getElementById('bmi-form');
	const bmiResult = document.getElementById('bmi-result');
	bmiForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const weight = parseFloat(document.getElementById('bmi-weight').value);
		const height = parseFloat(document.getElementById('bmi-height').value);
		if (weight && height) {
			const bmi = weight / (height * height);
			bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;
			updateChart(bmi);
		} else {
			bmiResult.textContent = "Please enter valid values!";
		}
	});
}

function updateChart(bmiResult) {
	let bmiCategory;
	if (bmiResult < 18.5) {
		bmiCategory = 'Underweight';
	} else if (bmiResult >= 18.5 && bmiResult < 24.9) {
		bmiCategory = 'Normal weight';
	} else if (bmiResult >= 25 && bmiResult < 29.9) {
		bmiCategory = 'Overweight';
	} else {
		bmiCategory = 'Obesity';
	}


	Highcharts.chart('container', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		title: {
			text: '',
		},
		exporting: {
			enabled: false // Disable the menu
		},
		tooltip: {
			useHTML: true,
			formatter: function () {
				return `<b>${this.point.name}</b><br>BMI Range: <b>${this.point.range}</b>`;
			}
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: false,
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%'
			}
		},
		series: [{
			type: 'pie',
			name: 'BMI Results',
			innerSize: '50%',
			data: [
				{
					name: 'Underweight',
					y: 25,
					range: '< 18.5',
					color: '#ADD8E6'
				},
				{
					name: 'Normal weight',
					y: 25,
					range: '18.5 – 24.9',
					color: '#32CD32'
				},
				{
					name: 'Overweight',
					y: 25,
					range: '25.0 – 29.9',
					color: '#FFD700'
				},
				{
					name: 'Obesity',
					y: 25,
					range: '30.0 and above',
					color: '#FF6347'
				}
			],
			colors: ['#ADD8E6', '#32CD32', '#FFD700', '#FF6347'], // Custom colors for each section

		}]
	}, function (chart) {
		// Find the correct slice based on the BMI result
		let sliceIndex;

		switch (bmiCategory) {
			case 'Underweight':
				sliceIndex = 0;
				break;
			case 'Normal weight':
				sliceIndex = 1;
				break;
			case 'Overweight':
				sliceIndex = 2;
				break;
			case 'Obesity':
				sliceIndex = 3;
				break;
		}

		// Select the slice
		chart.series[0].data[sliceIndex].select(true); // Select the corresponding slice
	});

}
