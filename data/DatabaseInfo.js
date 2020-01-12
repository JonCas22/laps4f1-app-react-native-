
export default class DatabaseInfo{

    constructor(){
        super();
        this.state = {
          firebaseConfig : {},
          driversArray : [],
          teamsArray : [],
          lastCircuit : '',
          
        };
      }

    componentWillMount(){
        this._loadDatabase();
        this._getDataFromDriver();   
        this._getDataFromTeam();
        this._getDataFromLastCircuit();
      }
      
      _loadDatabase(){
        firebaseConfig = {
          apiKey: "AIzaSyC0dfH_C1kpisc72YZUCEWZ_9pvN7HtRYU",
          authDomain: "laps4f1-b894f.firebaseapp.com",
          projectId: "laps4f1-b894f",
          databaseURL: "https://laps4f1-b894f.firebaseio.com",
          storageBucket: "laps4f1-b894f.appspot.com"
        };
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
       }
      }
      _getDataFromTeam(){
        let citiesRef = firebase.firestore().collection('equipos');
        let query = citiesRef.orderBy('points', 'desc').get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
          snapshot.forEach(doc => {
            if(this.state.teamsArray.length<10){
              //console.log(doc.id, '=>', doc.data());
              this.setState({teamsArray : this.state.teamsArray.concat(doc.data())});
            }
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
        
        //console.log("Tamaño " + this.state.teamsArray.length);
      }
    
      _getDataFromLastCircuit(){
        let cityRef = firebase.firestore().collection('actualizado_post_carrera').doc('f1');
        let getDoc = cityRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            //console.log('Document data:', doc.data().circuit);
            this.setState({lastCircuit : doc.data().circuit});
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });
      }
    
      _getDataFromDriver(){
        let citiesRef = firebase.firestore().collection('pilotos');
        let query = citiesRef.orderBy('points', 'desc').get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
          snapshot.forEach(doc => {
              //console.log(doc.id, '=>', doc.data());
              this.setState({driversArray : this.state.driversArray.concat(doc.data())});
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
        
        //console.log("Tamaño " + this.state.driversArray.length);
      }

      _getDrivers(){
        return this.state.driversArray;
      }
      _getTeams(){
        return this.state.teamsArray;
      }
      _getlastCircuit(){
        return this.state.lastCircuit;
      }
    
}