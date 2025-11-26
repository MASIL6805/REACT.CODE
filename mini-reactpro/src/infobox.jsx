
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css';


export default function InfoBox({Info}) {
    const INIT_IMG="https://images.unsplash.com/photo-1641970304088-2b016b4a883b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwY2l0eSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    // let info = {
    //     feelslike: 27.05,
    //     temp: 25.25,
    //     temp_min: 24.0,
    //     temp_max: 26.0,
    //     humidity: 60,
    //     weather: "clear sky"
    // }
    return (
        <div className='infobox'> 
            <div className='CardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={INIT_IMG}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature={Info.temp}&deg;C</div>
          <div>Humidity={Info.humidity}</div>
          <div>Temp_Min={Info.temp_min}&deg;C</div>
          <div>Temp_Max={Info.temp_max}&deg;C</div>
          <div>The Weather can be described as {Info.weather} and Feels Like {Info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
      
    </Card>
            </div>
        </div>
    )
};