import React, { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useAuth } from '../contexts/AuthContext'
import { GET_AVERAGE_BAR_SCORES, GET_AVERAGE_LINE, GET_AVERAGE_WELLNESS_SCORE } from '../graphql/queries'

const Dashboard = (props) => {
	const [barChartData, setBarChartData] = useState()
	const barChart = () => {
		setBarChartData({
			labels: ['Work Load', 'Peer Relations', 'Impact', 'Leader Support', 'Development', 'Autonomy'],
			datasets: [
				{
					label: 'Scores',
					data: [props.workLoad, props.peerRelations, props.impact, props.leaderSupport, props.development, props.autonomy],
					backgroundColor: [
						'rgba(75, 192, 192, 0.6)',
						'rgba(55, 92, 12, 0.6)',
						'rgba(95, 2, 19, 0.6)',
						'rgba(25, 19, 92, 0.6)',
						'rgba(45, 9, 2, 0.6)',
						'rgba(35, 192, 86, 0.6)'
					],
					borderWidth: 4
				}
			]
		})
	}
	const [lineChartData, setLineChartData] = useState()
	const lineChart = () => {
		setLineChartData({
			labels: [1,2,3,4,5],
			datasets: [
				{
					label: 'Average Score During that Week',
					data: [props.score1,props.score2,props.score3,props.score4,props.score5],
					backgroundColor: [
						'rgba(75, 192, 192, 0.6)',
					],
					borderWidth: 4
				}
			]
		})
	}

	useEffect(() => {
		barChart()
		lineChart()
	}, [])

	return (
		<div className="Dashboard">
			<h1 style={{ borderRadius: 100, borderWidth: 10, borderColor: 'black' }}>Current Average Wellness Score: {props.wellnessScoreAverage}</h1>
			<div style={{ float: 'right', width: '500px', }}>
				<Bar data={barChartData} options={{
					responsive: true,
					title: {
						text: 'Average Topic Score of Team',
						display: true,
						fontSize: 25,
						fontStyle: 'bold'
					},
					layout: {
						padding: 5
					},
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true
								}
							}
						]
					}
				}} />
			</div>
			<div style={{ width: '900px' }}>
				<Line data={lineChartData} options={{
					responsive: true,
					title: {
						text: 'Average Score Trend of Team',
						display: true,
						fontSize: 25,
						fontStyle: 'bold'
					},
					layout: {
						padding: 50
					},
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true
								}
							}
						]
					}
				}} />
			</div>

		</div>

	)
}

const AverageScores = () => {
	const { currentUser } = useAuth()
	const email = currentUser.email
	const averageScore = average => average.reduce((a,b) => a+b,0)/average.length
	function checkT(array){
		if(array.length==0){
			return array.push(0)
		}else{
			return averageScore(array)

		}
	}
	var average=[]
	var averageWellnessScore
	var averageWorkLoad, averagePeerRelations, averageImpact, averageLeaderSupport, averageDevelopment, averageAutonomy
	var wl=[], pr=[], im=[], ls=[], dv=[], ay=[];
	var as1=[],as2=[],as3=[],as4=[],as5=[];
	var i,j;

	const { loading: loading1, error: error1, data: data1 } = useQuery(GET_AVERAGE_WELLNESS_SCORE, {
		variables: { email }
	})

	const { loading: loading2, error: error2, data: data2 } = useQuery(GET_AVERAGE_BAR_SCORES, {
		variables: { email }
    })
    const { loading: loading3, error: error3, data: data3 } = useQuery(GET_AVERAGE_LINE, {
        variables: { email }
    })

	if (loading1) return <div>Loading...</div>
	if (loading2) return <div>Loading...</div>
    if (loading3) return <div>Loading...</div>
	if (error1) return `Error! ${errorR.message}`
    if (error2) return `Error! ${errorR.message}`
    if (error3) return `Error! ${errorR.message}`

    for (i=0; i<Object.keys(data1['Users']).length;i++){
		
		if(Object.keys(data1['Users'][i]['user_tests_rel']).length==0){
			continue
		}else{
			average.push(data1['Users'][i]['user_tests_rel'][0]['Test'].score)
			wl.push(data2['Users'][i]['user_tests_rel'][0]['Test'].work_load_score)
			pr.push(data2['Users'][i]['user_tests_rel'][0]['Test'].peer_relations_score)
			im.push(data2['Users'][i]['user_tests_rel'][0]['Test'].impact_score)
			ls.push(data2['Users'][i]['user_tests_rel'][0]['Test'].leader_support_score)
			dv.push(data2['Users'][i]['user_tests_rel'][0]['Test'].development_score)
			ay.push(data2['Users'][i]['user_tests_rel'][0]['Test'].autonomy_score)
		}
		
	}
	for (i=0;i<Object.keys(data3['Users']).length;i++){
		var testnum=Object.keys(data3['Users'][i]['user_tests_rel']).length
		if (testnum==0){
			continue
		}else{
			for(j=0;j < 1;j++){
				if(testnum==1){
					as1.push(data3['Users'][i]['user_tests_rel'][j].Test.score)

				}else if(testnum==2){
					as1.push(data3['Users'][i]['user_tests_rel'][j].Test.score)
					as2.push(data3['Users'][i]['user_tests_rel'][j+1].Test.score)

				}else if(testnum==3){
					as1.push(data3['Users'][i]['user_tests_rel'][j].Test.score)
					as2.push(data3['Users'][i]['user_tests_rel'][j+1].Test.score)
					as3.push(data3['Users'][i]['user_tests_rel'][j+2].Test.score)
				}else if(testnum==4){
					as1.push(data3['Users'][i]['user_tests_rel'][j].Test.score)
					as2.push(data3['Users'][i]['user_tests_rel'][j+1].Test.score)
					as3.push(data3['Users'][i]['user_tests_rel'][j+2].Test.score)
					as4.push(data3['Users'][i]['user_tests_rel'][j+3].Test.score)	
				}else if(testnum==5){
					as1.push(data3['Users'][i]['user_tests_rel'][j].Test.score)
					as2.push(data3['Users'][i]['user_tests_rel'][j+1].Test.score)
					as3.push(data3['Users'][i]['user_tests_rel'][j+2].Test.score)
					as4.push(data3['Users'][i]['user_tests_rel'][j+3].Test.score)
					as5.push(data3['Users'][i]['user_tests_rel'][j+4].Test.score)
				}
				
			}
		}
	}
	var avs1=checkT(as1)
	var avs2=checkT(as2)
	var avs3=checkT(as3)
	var avs4=checkT(as4)
	var avs5=checkT(as5)
	if (average.length==0){
		averageWellnessScore=0
		averageAutonomy=0
		averageDevelopment=0
		averageImpact=0
		averageLeaderSupport=0
		averagePeerRelations=0
		averageWorkLoad=0
	}else{
		averageWellnessScore=averageScore(average)
		averageAutonomy=averageScore(ay)
		averageDevelopment=averageScore(dv)
		averageImpact=averageScore(im)
		averageLeaderSupport=averageScore(ls)
		averagePeerRelations=averageScore(pr)
		averageWorkLoad=averageScore(wl)
	}

	return <Dashboard wellnessScoreAverage={averageWellnessScore}
		workLoad={averageWorkLoad}
		peerRelations={averagePeerRelations}
		impact={averageImpact}
		leaderSupport={averageLeaderSupport}
		development={averageDevelopment}
		autonomy={averageAutonomy}
		score1={avs1}
		score2={avs2}
		score3={avs3}
		score4={avs4}
		score5={avs5}
	/>
}
export default AverageScores
