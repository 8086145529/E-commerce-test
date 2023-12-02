const { useEffect, useState } = require("react")

const useFetch = (url)=>{
    const [data,setData] = useState(null)
    useEffect(()=>{ // Home componentil useFetchine url koduth call cheyumbol,useFetch define cheythittula sthalath varum.i.e  appol useEffectinulle api calling aa component first mount aayi varumbozhum,then urlinte value change cheyumbozhum mathram nadakkan vendiyitt,i.e home component open aayi varumpozhann namuk api call vazhi kittuna data vendath 
        fetch(url).then(res=>{
            res.json().then(result=>{
                setData(result)  // ivide nammuk api call cheyth kittuna resultine componentil useFetch function call cheyumbol kittanam,athinayitt useFetach functionil ninnum athine return cheyanam,i.e useEffect functionte velliyil athine access cheyanamenkil,useEffectinte velliyil data ennnoru state create cheythitt aa stateinte value ee api calling vazhi kittuna result aayi set cheyuka.appol ee stateine return cheythal mathi.
            })
        })
    },[url]) //  This means that the effect will re-run whenever the url prop changes. This ensures that if the url prop changes, the effect (i.e., the fetch request) will be triggered again.

    return data
}

export default useFetch