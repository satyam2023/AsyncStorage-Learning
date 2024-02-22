import React, { useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { getData, storeData ,searchData, mergeUser} from "../utils/helper";
const Storage=()=>{
    const details={
        name:useRef(''),
        age:useRef(''),
        id:useRef(''),
        mergename:useRef(''),
        mergeage:useRef(''),
        mergeid:useRef(''),

    };
    const [name,setname]=useState<string>('');
    const [age,setAge]=useState<string>('');

    function setDetails(name:string,age:string){
        setname(name);
        setAge(age);
    }

    function handlesendData(){
        
        if(details.name.current.length<4 && details.age.current.length>2){
            Alert.alert("Enetr valid Details")
        }
        else{
            storeData({name:`${details.name.current}`,age:`${details.age.current}`});
        }
    }
    
     function handleget(){
        console.log("details::",details.id.current)
        if(details.id.current.length==0){
            Alert.alert("Enter a Valid Id ,Entered Id not correct");
        }
        else{
            // getData(details.id.current,setDetails);
            searchData(details.id.current,setDetails);
        }
     }

     function handlemerge(){
        if(details.mergename.current.length<4 && details.mergeage.current.length>2 && details.mergeid.current.length!=0){
            Alert.alert("Please Fill all details")
        }
        else{
            mergeUser({name:`${details.mergename.current}`, age:`${details.mergeage.current}` }, details.mergeid.current)
        }

     }

    return(
<SafeAreaView >
    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'500'}}> AsyncStorage</Text>


    <View>

<TextInput 
placeholder="Enter Your Name"
placeholderTextColor={'#000000'}
onChangeText={(text:string)=>{
    details.name.current=text;
}}
style={{padding:10,backgroundColor:'#E6E6E6',marginHorizontal:30,borderRadius:20,marginVertical:10}}

/>

<TextInput 
placeholder="Enter Your Age"
placeholderTextColor={'#000000'}
onChangeText={(text:string)=>{
    details.age.current=text;
}}
style={{padding:10,backgroundColor:'#E6E6E6',marginHorizontal:30,borderRadius:20,marginVertical:10}}
/>
    <TouchableOpacity onPress={handlesendData} style={{padding:20,backgroundColor:'#E6E6E6',borderRadius:100,alignSelf:'center'}}>
        <Text style={{alignSelf:'center',fontSize:20,fontWeight:'500'}}>Set data</Text>
    </TouchableOpacity>
    <TextInput 
placeholder="Enter Id To Search"
placeholderTextColor={'#000000'}
onChangeText={(text:string)=>{
    details.id.current=text;
}}
style={{padding:10,backgroundColor:'#E6E6E6',marginHorizontal:30,borderRadius:20,marginVertical:10}}
/>
    <TouchableOpacity onPress={handleget} style={{padding:20,backgroundColor:'#E6E6E6',borderRadius:100,alignSelf:'center',marginTop:20}}>
        <Text style={{alignSelf:'center',fontSize:20,fontWeight:'500'}}>Get Item</Text>
    </TouchableOpacity>
    {  
    age ?
    <View style={{alignSelf:'center'}}>
         <Text style={{alignSelf:'center',fontSize:20,fontWeight:'600',marginVertical:20}}>
  Search Result
</Text>
        <Text>
       Name: {name}
        </Text>
        <Text>
        Age: {age}
        </Text>
        </View>:
        <View/>

    }
    <View>

    <TextInput 
placeholder="Enter Id To merge"
placeholderTextColor={'#000000'}
onChangeText={(text:string)=>{
    details.mergeid.current=text;
}}
style={{padding:10,backgroundColor:'#E6E6E6',marginHorizontal:30,borderRadius:20,marginVertical:10}}

/>

<TextInput 
placeholder="Enter name"
placeholderTextColor={'#000000'}
onChangeText={(text:string)=>{
    details.mergename.current=text;
}}
style={{padding:10,backgroundColor:'#E6E6E6',marginHorizontal:30,borderRadius:20,marginVertical:10}}
/>
<TextInput 
placeholder="Enter age"
placeholderTextColor={'#000000'}
onChangeText={(text:string)=>{
    details.mergeage.current=text;
}}
style={{padding:10,backgroundColor:'#E6E6E6',marginHorizontal:30,borderRadius:20,marginVertical:10}}
/>
    <TouchableOpacity onPress={handlemerge} style={{padding:20,backgroundColor:'#E6E6E6',borderRadius:100,alignSelf:'center'}}>
        <Text style={{alignSelf:'center',fontSize:20,fontWeight:'500'}}>Merge data</Text>
    </TouchableOpacity>

    </View>
    </View>
</SafeAreaView>

    );
}

export default Storage;