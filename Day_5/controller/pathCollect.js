// step - 15
export const pathCollect = (req, res) => {

    console.log( "request recieved", req.body)
    res.status(200).json( { datas: req.body, message: "your data is successfuly recived" } );
    

}

