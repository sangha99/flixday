module.exports = function(app, fs, xmlconv) {
    app.get('/getData', function(req, res) {
        // 공공 API 요청
        const url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo';
        const key = 'HMYoeypvgjw489Xr7t46H5OU5tFkGfqpI8XBvtJMiqyTRy4b1FQskYDwjX8hrz4g2RfdEVLNPfyshvoZnVvsJg==';
        const param = {
            'servicekey': key,
            'solYear':'2022',
            'solMonth':'09',
        
        }
        const reqURL = url + '?' + new URLSearchParams(param);

        fetch(reqURL)
        .then(response =>  {
            return response.text();
        }).then(data => {
           let jsonData = JSON.parse(xmlconv.xml2json(data));
            res.json(jsonData);
        }).catch(err => {
            console.log(err);
        });
    });
}