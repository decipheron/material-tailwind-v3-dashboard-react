import {
  Card,
  Avatar,
  Typography,
  Tabs, 
  Switch,
  Tooltip,
  Button,
  Chip,
  List,
  ListItemStart
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { EditPencil, Home, Label, Message, ProfileCircle ,Mail, Settings, Trash, Facebook, X, Instagram } from "iconoir-react";

export function Profile() {
  return (
    <>
     <div className=" mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
     
      </div>
      <Card className="-mt-16 mb-6 lg:mx-4 border border-blue-gray-100  w-fit ">
        <Card.Body className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="primary" className="mb-1 font-semibold">
                  Richard Davis
                </Typography>
                <Typography
                  
                  className="font-normal text-slate-500 text-sm"
                >
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>
            <div className="w-96">
            <Tabs defaultValue="dashboard">
      <Tabs.List className="w-full">
        <Tabs.Trigger className="w-full" value="dashboard">
          <Home className="me-2 h-5 w-5" />
          App
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="profile">
          <Message className="me-2 h-5 w-5" />
          Message
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="settings">
          <Settings className="me-2 h-5 w-5" />
          Settings
        </Tabs.Trigger>
        <Tabs.TriggerIndicator />
      </Tabs.List>
    </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="primary" className="mb-3 font-semibold">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-slate-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
           
                      <div className="flex items-center gap-2">
      <Switch id={label} key={label} className="cursor-pointer after:shadow-md after:w-5 after:-translate-y-[14px] after:-translate-x-[3px] after:h-5 before:h-4 before:w-9 "  defaultChecked={checked} />
      <Typography
        as="label"
        htmlFor={label}
        className="text-sm text-slate-500"
      >
        {label}
      </Typography>
    </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
                <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full ">
                  <Typography className="font-semibold">
                    Profile information
                  </Typography>
                  <Tooltip>
         <Tooltip.Trigger as={Button} className="bg-transparent border-none text-primary hover:bg-tranparent">
          <EditPencil className="w-5 h-5 "/>
         </Tooltip.Trigger>
      <Tooltip.Content className="text-sm rounded-md py-2 px-3">
      Edit Profile
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
                </div>

                <Typography className="text-sm text-slate-500 border-b border-secondary pb-12">
                Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                  </Typography>  


                <List className="mt-14">
      <List.Item className="cursor-pointer text-sm font-semibold ">
       First Name
        <List.ItemEnd>
          <Chip size="sm" className="bg-tranparent text-slate-500 font-medium border-none">
            <Chip.Label>Alec M. Thompson</Chip.Label>
          </Chip>
        </List.ItemEnd>
      </List.Item>
      <List.Item className="cursor-pointer text-sm font-semibold">
       
        Mobile
        <List.ItemEnd>
          <Chip size="sm" className="bg-tranparent text-slate-500 font-medium border-none">
            <Chip.Label>(44) 123 1234 123</Chip.Label>
          </Chip>
        </List.ItemEnd>
      </List.Item>
      
      <List.Item className="cursor-pointer text-sm font-semibold">
       
       Email
       <List.ItemEnd>
         <Chip size="sm" className="bg-tranparent text-slate-500 font-medium border-none">
           <Chip.Label>alecthompson@mail.com</Chip.Label>
         </Chip>
       </List.ItemEnd>
     </List.Item>

     <List.Item className="cursor-pointer text-sm font-semibold">
       
       Location
       <List.ItemEnd>
         <Chip size="sm" className="bg-tranparent text-slate-500 font-medium border-none">
           <Chip.Label>
USA</Chip.Label>
         </Chip>
       </List.ItemEnd>
     </List.Item>

     <List.Item className="cursor-pointer text-sm font-semibold">
       
       Social
       <List.ItemEnd>
         <Chip size="sm" className="bg-tranparent text-slate-500 font-medium border-none flex items-center gap-2">
           <Facebook className="w-4 h-4 text-blue-400"/>
           <X className="w-4 h-4 text-primary"/>
           <Instagram className="w-4 h-4 text-error"/>
         </Chip>
       </List.ItemEnd>
     </List.Item>
      
    </List>

       </div>

       <div>
              <Typography variant="h6" color="blue-gray" className="mb-3 font-semibold">
                Platform Settings
              </Typography>
              <List className="flex flex-col gap-4 mt-4">
                {conversationsData.map(({name , img , message}) => (
                 
                  <List.Item className="flex items-center justify-between gap-1 cursor-pointer ">
                  <div className="flex items-center">
                  <ListItemStart>
                      <Avatar src={img}/>
                    </ListItemStart>

                  <div>
                    <Typography className="text-sm font-semibold">{name}</Typography>
                    <Typography className="text-slate-500 text-xs">{message}</Typography>
                  </div>
                  </div>

                   <Button className="bg-tranaprent border-none text-primary hover:bg-tranparent">
                    Reply
                    </Button> 
                  </List.Item>

                ))} 
              </List>
            </div>

           
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="primary" className="mb-2 font-semibold">
              Projects
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-slate-500"
            >
              Architects design houses
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(
                ({ img, title, description, tag, route, members }) => (
                  <Card key={title} className="h-fit border-none bg-transparent shadow-none" >
                    <Card.Header                                       
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40 w-full"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </Card.Header>
                    <Card.Body className="py-0 px-1  h-[7rem]">
                      <Typography
                        
                        className="text-slate-500 text-sm"
                      >
                        {tag}
                      </Typography>
                      <Typography
                       
                        color="primary"
                        className="mt-1 mb-2 font-semibold text-md"
                      >
                        {title}
                      </Typography>
                      <Typography
                      
                        className="font-normal text-slate-500 text-sm leading-relaxed"
                      >
                        {description}
                      </Typography>
                    </Card.Body>
                    <Card.Footer className="mt-6 flex items-center justify-between px-0">
                        <Link to={route}>
                          <Button variant="solid" color="primary" className="bg-transparent text-primary font-semibold hover:bg-transparent">
                            View Product
                          </Button>
                        </Link>

                    <div>
                    {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                            
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                    </div>

                    </Card.Footer>
                  </Card>
                )
              )}
            </div>
          </div>
        </Card.Body>
      </Card> 
    </>
  );
}

export default Profile;
