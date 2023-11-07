const EnumUtil={
    getGenderUtil:(gender)=>{
        switch(gender){
            case "kadın":return 2
            case "erkek":return 1
        }
    }
}

export default EnumUtil;