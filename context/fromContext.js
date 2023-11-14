import { createContext, useContext, useState } from "react";


const FromContext = createContext();

export function UseFrom() {
    return useContext(FromContext);
}

export function FromProvider({ children }) {

    //for one
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [bName, setbName] = useState('');
    const [wadmit, setwadmit] = useState('');
    const [dateOFbrith, setdateOFbrith] = useState('');
    const [faterName, setfaterName] = useState('');
    const [moterName, setfmoterName] = useState('');
    const [sContact, setsContact] = useState('');
    const [brithregi, setbrithregi] = useState('');
    const [bloodGroup, setbloodGroup] = useState('');
    const [quata, setquata] = useState('');
    const [residance, setresidance] = useState('');
    const [gender, setgender] = useState('');
    const [religion, setreligion] = useState('');

    //for two
    const [fOccupation, setfOccupation] = useState("");
    const [mOccupation, setfmccupation] = useState("");
    const [fmIncome, setfmIncome] = useState("");
    const [mmIncome, setmmIncome] = useState("");
    const [fpNumber, setfpNumber] = useState("");
    const [mpNumber, setmpNumber] = useState("");
    const [fEmail, setfEmail] = useState("");
    const [mEmail, setmEmail] = useState("");

    //for three
    const [prCountry, setprCountry] = useState("");
    const [prDivision, setprDivision] = useState("");
    const [prDistrict, setprDistrict] = useState("");
    const [prUpazila, setprUpazila] = useState("");
    const [prUnion, setprUnion] = useState("");
    const [prPost, setprPost] = useState("");
    const [prVillage, setprVillage] = useState("");


    const [psCountry, setpsCountry] = useState("");
    const [psDivision, setpsDivision] = useState("");
    const [psDistrict, setpsDistrict] = useState("");
    const [psUpazila, setpsUpazila] = useState("");
    const [psUnion, setpsUnion] = useState("");
    const [psPost, setpsPost] = useState("");
    const [psVillage, setpsVillage] = useState("");

    //for four
    const [familyCall, setfamilyCall] = useState('');
    const [photo, setphoto] = useState('');

    //response
    const [res, setres] = useState();


    //deshboard data
    const [deshboard, setdeshboard] = useState({});



    const vl = {
        fName,
        setfName,
        lName,
        setlName,
        bName,
        setbName,
        wadmit,
        setwadmit,
        faterName,
        setfaterName,
        moterName,
        setfmoterName,
        sContact,
        setsContact,
        brithregi,
        setbrithregi,
        dateOFbrith,
        setdateOFbrith,
        bloodGroup,
        setbloodGroup,
        quata,
        setquata,
        residance,
        setresidance,
        gender,
        setgender,
        religion,
        setreligion,
        fOccupation,
        setfOccupation,
        mOccupation,
        setfmccupation,
        fmIncome,
        setfmIncome,
        mmIncome,
        setmmIncome,
        fpNumber,
        setfpNumber,
        mpNumber,
        setmpNumber,
        fEmail,
        setfEmail,
        mEmail,
        setmEmail,
        prCountry,
        setprCountry,
        prDivision,
        setprDivision,
        prDistrict,
        setprDistrict,
        prUpazila,
        setprUpazila,
        prUnion,
        setprUnion,
        prPost,
        setprPost,
        prVillage,
        setprVillage,
        psCountry,
        setpsCountry,
        psDivision,
        setpsDivision,
        psDistrict,
        setpsDistrict,
        psUpazila,
        setpsUpazila,
        psUnion,
        setpsUnion,
        psPost,
        setpsPost,
        psVillage,
        setpsVillage,
        familyCall,
        setfamilyCall,
        photo,
        setphoto,
        res,
        setres,
        deshboard,
        setdeshboard
    }
    return (
        <FromContext.Provider value={vl}>
            {children}
        </FromContext.Provider>
    )
}