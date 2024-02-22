/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Data } from '../utils/data';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Hero from './hero';
import Support from './Support';


const ExpandMore = styled((props) => {

})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [data, setData] = React.useState(Data)
    return (
        <div className='flex flex-col justify-center items-start ' >
            <Hero />
            <div className="flex items-center justify-between mb-5 p-5 w-full abt1 flex-wrap">
                <div style={{ width: '45%' }} className="abt1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtM0cnnPcSLUSJyw75W23VdC5eMGWZiuTPOQ&usqp=CAU" alt="" className="w-full object-contain" />                </div>
                <div style={{ width: '45%' }} className="flex abt1 gap-5 abt1  flex-col items center">
                    <h1 className="text-3xl text-pink-600">Philosophy of Our Service</h1>
                    <p className='text-lg'>At TopCare  Services, we believe our service users deserve
                        respect, dignity and equality. As an organisation, we are aware of the
                        challenges faced by individuals with mental and psychosocial needs
                        and the support needed to enable them to lead satisfying and fulfilling
                        lives. We aim to eliminate the continuous discrimination, stigmatization,
                        abuse and neglect individuals with mental and psychosocial needs face
                        from society by using a patient centred coordinated care. This ensures
                        we deliver high quality care focused on meeting the individual needs of
                        our clients. Our services encourage community centred care through
                        multi- agency approach to help clients move towards health and wellbeing and
                        prevent hospital readmissions. Our service structure is based
                        on the 6 principles of Safeguarding and the 5 principles of the Mental
                        Capacity Act. Ensuring that the service we offer has our service user’s
                        best interest at heart</p>
                </div>
            </div>
            <Support />
            <div className="personal">
                <div style={{ width: '45%' }} className='flex abt1 border bg-slate-200 rounded-lg shadow-2xl p-2 flex-col gap-4'>
                    <h1 className="text-2xl text-red-600">
                        Therapists
                    </h1>
                    <h6 className="text-lg">
                        Our therapists will work with people with physical, mental or social
                        disabilities to help them do everyday activities. They will spend time
                        with individuals to find out what they usually do in their day to day
                        life and any challenges they face. They will establish a 7 plan with the
                        service user and their Support Team to assist the service users in
                        identifying ways to overcome these problems. They are committed
                        to ensuring that individuals can perform their Activities of Daily
                        Living and making recommendations on how they might improve
                        and get the support they need.
                    </h6>
                    <h1 className="text-2xl text-red-600 mt-6">
                        Person Centred Care
                    </h1>
                    <p className="text-lg">
                        We use the "Three Conversations" approach to deliver personcentered care by conducting a needs assessment and care planning
                        that focuses primarily on the person's strengths and community
                        assets. This facilitates co-production with the service user, allowing
                        them to take control of their own care and treatment by expressing
                        their goals and needs. Our clients are at the centre of everything we
                        do. As we work in cooperation with them, we decide how to help
                        each individual be as independent as possible in their own home
                        and community. We also take into account what their families and
                        any professionals who may be supporting them have to say. Each
                        individual is supported by a support worker who is a specialist and
                        has been trained to meet their unique needs. We do everything we
                        can to make sure that our team members are a good fit for each
                        other. This helps build trusting and positive relationships. Clients
                        gain confidence quickly when they get tailored help from people
                        they know and trust.

                    </p>
                </div>
                <div style={{ width: '45%' }} className='flex abt1 border bg-slate-200 rounded-lg shadow-2xl p-2 flex-col gap-4'>
                    <h1 className="text-2xl text-red-600">
                        Person Centred Care
                    </h1>
                    <img className='w-full h-72 object-cover' src="https://res.cloudinary.com/pitz/image/upload/v1708633958/Capture_h1r0ml.png" alt="" />
                    <p>TopCarePlan will work in complete partnership with service users
                        and/or their legal representatives throughout the care planning
                        process to develop strategies that effectively fulfil the service user's
                        needs in order to:
                    </p>
                    <ol>
                        <li>Represent service users’ wishes and objectives, including
                            activities, relationships, and end-of-life preferences.</li>
                        <li>Maintain and promote emotional, physical and mental wellbeing, including personal care.</li>
                        <li>Represent service users’ human rights, equality, and diversity. •
                            Where possible, promote choice, self-care, and independence. •
                            Ensure safety from avoidable harm.
                        </li>
                    </ol>
                    <p>Risks are person-centered to ensure that we recognise each
                        individual's specific needs, as people in this service group will
                        sometimes have multiple conditions that co-exist, overlap, and
                        interlock to create a complex profile. We evaluate them as frequently
                        as required, then annually when they are more settled.
                    </p>
                </div>

            </div>
            <h3 className='text-pink-400 underline  pl-20 mt-3 text-2xl'> Our services</h3>
            <div className='flex items-center mt-10 justify-center w-full gap-5 flex-wrap'>
                {data.map((item, index) => {
                    return (
                        <Card key={item.title} sx={{ maxWidth: 345, height: 590 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {item.title[0]}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={item.title}
                                subheader="uk based services"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.image}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}                                </Typography>
                            </CardContent>
                            <CardActions className='flex items-center justify-between' disableSpacing>
                                {/* <IconButton aria-label="add to favorites"> */}
                                <Link to='/contact'>
                                    <Button className='flex bg-slate-400 text-pink-200 btn'>Get the service</Button>

                                </Link>
                                {/* </IconButton> */}
                                {item.title === 'Live care' && (
                                    <Link to='/categories'>
                                        <h4 className='btn1'>Categories</h4>

                                    </Link>

                                )}
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
