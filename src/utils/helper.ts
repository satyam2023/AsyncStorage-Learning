import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Alert } from 'react-native';
interface Iuser{
    name:string,
    age:string
}


async function searchData(searchname:any,setDetails:Function){

  await AsyncStorage.getAllKeys()
    .then((keys)=> AsyncStorage.multiGet(keys)
                    .then((data) => {
            for (let i=0;i<data.length;i++){
              const Data=JSON.parse(data[i][1]);
             if(searchname==Data.name){
                    setDetails(Data.name,Data.age);
                    break;
             }
            }
  }))
  .catch(
    (e)=>{
     console.log("Error ::",e);
    }
  )
}



const storeData = async (value:Iuser) => {
    let setkey;
   
    await AsyncStorage.getAllKeys()
    .then((keys)=> AsyncStorage.multiGet(keys)
                    .then((data) => setkey=data.length+1));

    try {
     const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${setkey}`, jsonValue );
      Alert.alert("Value Stored Successfully::",jsonValue)
      console.log("setkey::",setkey);
    } catch (e) {
       console.log(e);
    }

  };


  const getData = async (key:string,setDetails:Function) => {


    
    try {
      const value = await AsyncStorage.getItem(`${key}`);
      const jsonvalue=JSON.parse(value);
    //  searchData();
    //   setDetails(jsonvalue.name,jsonvalue.age);
      console.log("Value::",jsonvalue);

      if (value !== null) {
        setDetails(jsonvalue.name,jsonvalue.age);

      }
      else {
        Alert.alert("Entered id Does not exist");
        console.log("Key Not Exist.")
      }
    } catch (e) {
        console.error(e);
    }
  };



  async function mergeUser(id:number,data:any){


    try{
      await AsyncStorage.setItem(`${id}`, JSON.stringify(data));
      const currentUser = await AsyncStorage.getItem(`${id}`)
      console.log("Current User Details:::",currentUser);

    }
    catch{

    }


  }





  export {storeData,getData,searchData,mergeUser};