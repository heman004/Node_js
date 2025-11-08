export const UseControll = (req, res) => {

    console.log(req.body);

    const { name } = req.body;

    if( !name ){

        res.status(404).json( "Something Went Wrong"  )

    } else {

        res.status(200).json( { user : name } )
        
    }
    

}