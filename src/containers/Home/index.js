import React, {Component} from 'react';
import {ScrollView,TouchableOpacity, View, Text ,TextInput,ActivityIndicator} from 'react-native';
import { Formik } from 'formik';
import {Validation, Metrics} from '../../config/';
import styles from './Style'


class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <ScrollView>
                <Formik
                    initialValues={{ name: '', email: '', country:'', city:'' }}
                    validationSchema={Validation}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                >
                    {
                        formikProps => (
                            <View style={{alignItems:'center', justifyContent:'center'}}>
                                <View style={{height:Metrics.VerticalSize(80)}}>
                                    <TextInput
                                        style={styles.textStyle}
                                        value={formikProps.values.name}
                                        placeholder="name"
                                        onChangeText={formikProps.handleChange('name')}
                                    />
                                    <Text style={{color:'red'}}>{formikProps.errors.name && formikProps.touched.name, formikProps.errors.name}</Text>
                                </View>
                                <View style={{height:Metrics.VerticalSize(80)}}>
                                    <TextInput
                                        style={styles.textStyle}
                                        placeholder="email"
                                        onChangeText={formikProps.handleChange('email')}
                                    />
                                    <Text style={{color:'red'}}>{formikProps.errors.email && formikProps.touched.email, formikProps.errors.email}</Text>
                                </View>
                                <View style={{height:Metrics.VerticalSize(80)}}>
                                    <TextInput
                                        style={styles.textStyle}
                                        value={formikProps.values.country}
                                        placeholder="country"
                                        onChangeText={formikProps.handleChange('country')}
                                    />
                                    <Text style={{color:'red'}}>{formikProps.errors.country && formikProps.touched.country, formikProps.errors.country}</Text>
                                </View>
                                <View style={{height:Metrics.VerticalSize(80)}}>
                                    <TextInput
                                        style={styles.textStyle}
                                        value={formikProps.values.city}
                                        placeholder="city"
                                        onChangeText={formikProps.handleChange('city')}
                                    />
                                    <Text style={{color:'red'}}>{formikProps.errors.city && formikProps.touched.city, formikProps.errors.city}</Text>
                                </View>
                                <View style={{height:Metrics.VerticalSize(80)}}>
                                    {
                                        formikProps.isSubmitting?(
                                            <ActivityIndicator />
                                        ):(
                                            <TouchableOpacity onPress={formikProps.handleSubmit} style={styles.buttonStyle}>
                                                <Text style={{color:'white'}}>Submit</Text> 
                                            </TouchableOpacity> 
                                        )
                                    }
                                </View>
                            </View>
                        )
                    }
                </Formik>
            </ScrollView>
        )
    }
}

export default HomeScreen;