import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  


export default function App() {
  const [number, setNumber] = useState([])
  const [darkMode, isDark] = useState(false)
  const [leftP, setLeft] = useState(0)
  const [RightP, setRight] = useState(0)
  const [displayLen,setLen ] = useState(false)
  const[dot,setDot] = useState(false)
  const index = number.length -1
  const signal = ['+','-','/','*','(']

  
 
  useEffect(()=>{
    
    var oi = number[0]

    if(number.length >=12){
          setLen(true)
      }
      
    else if(oi== Number & number < 12 ){
        if(oi.length >=12){
            setLen(true)
        }
        else{
            setLen(false) 
        }
    }
    
    
    else {
          setLen(false)
      }
  },[number])

  function handleClick(num){
        setNumber([...number,num])

        if (number)
        
        if(signal.includes(num)){
            setDot(false)
        }
        
    }
    
    function handleEqual(){
        if(leftP=== RightP){
            var results = eval(number.join(''))
            
            
            
            setNumber([results])
            setDot(false)
        }
        else{setNumber(['Error'])}
    }      
    
    function handleC(){
        setNumber([])
        
        setDot(false)
    }

    function handleDot(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        if(numbers.includes(number[index]) ===true && dot===false ){
            setNumber([...number,'.'])
            setDot(true)
        }
    }
    
    function handleDelete(){
        setNumber(number=>number.filter((item, i) => i !== index))
    }
    
    function handleParams(){
        var results = number[index]
        
        const numbers = ['0','1','2','3','4','5','6','7','8','9',')']
        setDot(false)
        
        if(number.includes('(') === false){
            
            if(signal.includes(results) === true){
                setNumber([...number,'('])
                setLeft(leftP+1)
            }
            else{
                if(number.length <1){
                setNumber([...number,'('])
                setLeft(leftP+1)
            }
            else{
                setNumber([...number,'*','('])
                setLeft(leftP+1)
                }
            }
        }
        else{
            
            
            if(signal.includes(results) === true){
                setNumber([...number,'('])
                setLeft(leftP+1)
                
            }
            else if (numbers.includes(number[index])===true && leftP!=RightP ){
                setNumber([...number,')'])
                setRight(RightP+1)
               
            }
            else if(number[index]=== ')'){
                setNumber([...number,'*','(']) 
                setLeft(leftP+1)
                
            }
            else{
                setNumber([...number,')'])
                setRight(RightP+1)
                
            }
        }    
    }
    
    function handleSignal(){

    }
    const styles = StyleSheet.create({
        container: {
          backgroundColor: darkMode ?'#FFFAFA':'#000000',
          justifyContent:'flex-end',
          flex:1
      },
        
      buttonRow:{
          flexDirection:'row',
          justifyContent:'space-evenly'
         },
      
         text:{
          fontSize:30,
          fontWeight:'600',
          color:'white'
         },

         textOperation:{
            fontSize:30,
            fontWeight:'600',
            color:darkMode ? 'white' : 'black'
           },
      
      button: {
          alignItems:"center",
          justifyContent:"center",
          width:60,
          height: 60,
          borderRadius:40,
          margin:5,
          backgroundColor: "#2a2a2a"
      },
      
      buttonOperation: {
          alignItems:"center",
          justifyContent:"center",
          width:60,
          height: 60,
          borderRadius:40,
          margin:5,
          backgroundColor: "#ffa500"
      },
      
        screen:{
           flex:1,
           alignItems:'flex-end',
           justifyContent:'space-between', 
           
        },

        theme:{
            width:40,
            height: 40,
            borderRadius:40,
            backgroundColor:"orange",
            alignSelf:'flex-start',
            justifyContent: 'center',
            alignItems:'center',
            //bottom: 120,
            left: 20
            
        }
      });
      
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
          <TouchableOpacity style={styles.theme}>
            <Entypo name={darkMode ? 'moon': 'light-up'} size={24} color={darkMode ? 'white' : 'black'} onPress={()=> darkMode ? isDark(false) : isDark(true)} />
          </TouchableOpacity>
          <Text style={{color:darkMode ?'#000000':'#FFFAFA', margin:15, fontSize:displayLen?35:45}}>{number}</Text>
      </View>
      <Divider style={{margin:20,color:darkMode ?'#000000':'#FFFAFA' }}></Divider>
      <View style={styles.buttonBox}>
        <View style={styles.buttonRow}>
            <TouchableOpacity onPress={()=>handleC()} style={styles.buttonOperation} ><Text style={styles.textOperation}>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleParams()} style={styles.buttonOperation}><Text style={styles.textOperation}>( )</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleDelete()} style={styles.buttonOperation}><Text style={styles.textOperation}>←</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick('/')} style={styles.buttonOperation}><Text style={styles.textOperation}>÷</Text></TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity onPress={()=>handleClick(7)} style={styles.button}><Text style={styles.text}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick(8)} style={styles.button}><Text style={styles.text}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick(9)} style={styles.button}><Text style={styles.text}>9</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick('*')} style={styles.buttonOperation}><Text style={styles.textOperation}>×</Text></TouchableOpacity>
        </View>        
        
        <View style={styles.buttonRow}>
            <TouchableOpacity onPress={()=>handleClick(4)} style={styles.button}><Text style={styles.text}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick(5)} style={styles.button}><Text style={styles.text}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick(6)} style={styles.button}><Text style={styles.text}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick('-')} style={styles.buttonOperation}><Text style={styles.textOperation}>-</Text></TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity onPress={()=>handleClick(1)} style={styles.button}><Text style={styles.text}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick(2)} style={styles.button}><Text style={styles.text}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick(3)} style={styles.button}><Text style={styles.text}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick('+')} style={styles.buttonOperation}><Text style={styles.textOperation}>+</Text></TouchableOpacity> 
        </View>
        
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}><Text style={styles.text}>+/-</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleClick(0)} style={styles.button}><Text style={styles.text}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleDot()} style={styles.button}><Text style={styles.text}>.</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleEqual()} style={styles.buttonOperation}><Text style={styles.textOperation}>=</Text></TouchableOpacity>
        </View>
        
        

        
    </View>
    <StatusBar style={darkMode ? 'dark': 'light'} />
    </View>
  );
}

