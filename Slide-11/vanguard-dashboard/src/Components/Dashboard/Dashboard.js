import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Doughnut } from 'react-chartjs-2';


export class Dashboard extends Component {
    render() {
        const data = {
            labels: [
                'Health',
                'Misc Health',
                'Other',
                'Retirement'
            ],
            datasets: [{
                data: [40, 15, 20, 25],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF3031'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF3031'
                ]
            }]
        };
        return (
            <div >
                <div className='container-fluid'>
                    <div className='row mt-2'>
                        <div className='col-md-8 '>
                            <span className='h4'>Welcome to Your personalized benefit dashboard, ABC</span>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-8'>
                            <span className='h1'>Dashboard</span>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='card col-md-6 mr-3 shadow bg-light'>
                            <div className='row m-2'>
                                <div className='col-md-10'>
                                    <span className='h3'><b>Benefits overview</b></span>
                                </div>
                                <div className='col-md-2'>
                                    <Button color="primary" style={{ textTransform: 'none' }}>Edit</Button>
                                </div>
                            </div>
                            <div className='card-body'>
                                <Doughnut data={data} />
                            </div>
                        </div>
                        <div className='card col-md-5 ml-5 shadow bg-light'>
                            <div className='row m-2'>
                                <div className='col-md-10'>
                                    <span className='h4'><b>Contributions overview</b></span>
                                </div>
                                <div className='col-md-2'>
                                    <Button color="primary" style={{ textTransform: 'none' }}>Edit</Button>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <span>TOTAL BALANCE</span><br />
                                        <span className='h3'>$0</span>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <span>TOTAL VANGUARD ASSETS</span><br />
                                        <span className='h3'>$0</span>
                                    </div>
                                    <div className='col-md-6'>
                                        <span>CONNECTED ACCOUNT BALANCE</span><br />
                                        <span className='h3'>$0</span>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <span>TOTAL YEARLY CONTRIBUTIONS</span><br />
                                        <span className='h3'>$0</span>
                                    </div>
                                    <div className='col-md-6'>
                                        <span>RISK ATTRIBUTE</span><br />
                                        <span className='h3'>Moderate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
