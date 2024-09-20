import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import CardOverflow from '@mui/joy/CardOverflow';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Box from '@mui/joy/Box';
import CardCover from '@mui/joy/CardCover';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

function createData(id,name, calories, fat, carbs, protein) {
  return { id,name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3,'Eclair', 262, 16.0, 24, 6.0),
  createData(4,'Cupcake', 305, 3.7, 67, 4.3),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
];


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BasicCard() {
  const [open, setOpen] = React.useState(false);
  return (
    <CssVarsProvider>
        <CssBaseline />
        <Box component="ul" 
      sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', p: 0, m: 1 }}>
     <Card orientation="horizontal" variant="outlined" sx={{ width: 260, flexGrow: 1  }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          Yosemite Park
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260, flexGrow: 1  }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          Yosemite Park
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="solid"
        color="neutral"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260, flexGrow: 1  }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          Yosemite Park
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="solid"
        color="success"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260, flexGrow: 1  }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          Yosemite Park
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="solid"
        color="warning"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260, flexGrow: 1  }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          Yosemite Park
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="solid"
        color="danger"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
        </Box>
      

<Box  component="ul"
      sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', p: 0, m: 1 }}>
        <Card>
        <Typography level="title-lg">
        Bar Graph
      </Typography>
      <Divider inset="none" />
        <BarChart
         style={{width:'320px',height:'300px',Padding:'0px'}}
      series={[
        {
          data: pData,
          label: 'pv',
          id: 'pvId',
          yAxisKey: 'leftAxisId',
        },
        {
          data: uData,
          label: 'uv',
          id: 'uvId',
          yAxisKey: 'rightAxisId',
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />
        </Card>
   
    <Card>
    <Typography level="title-lg">
        Pie Chart
      </Typography>
      <Divider inset="none" />
    <PieChart
       style={{width:'320px',height:'300px',Padding:'0px'}}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
          innerRadius: 30,
          outerRadius: 70,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 280,
          cx: 150,
          cy: 150,
        }
      ]}
 
      
    />
    </Card>
    <Card>
    <Typography level="title-lg">
        Line Chart
      </Typography>
      <Divider inset="none" />
    <LineChart
      style={{width:'320px',height:'300px',Padding:'0px'}}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </Card>
    </Box>
    
      <Card sx={{ borderRadius:'md',m:1,p:0 }}>
      <Typography level="title-lg" sx={{m:1}}>
        Data
      </Typography>
      {/* <Divider inset="none" /> */}
      <Sheet
        variant="outlined"
        sx={{
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '80px',
          '--Table-lastColumnWidth': '144px',
          // background needs to have transparency to show the scrolling shadows
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
          background: (theme) =>
            `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
          backgroundColor: 'background.surface',
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 'var(--Table-firstColumnWidth)' }}>Id</th>
              <th style={{ width: 200 }}>Name</th>
              <th style={{ width: 200 }}>Calories</th>
              <th style={{ width: 200 }}>Fat&nbsp;(g)</th>
              <th style={{ width: 200 }}>Carbs&nbsp;(g)</th>
              <th style={{ width: 200 }}>Protein&nbsp;(g)</th>
              <th
                aria-label="last"
                style={{ width: '70px' }}
              >Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.protein}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                  <EditIcon
                  variant="outline"
                  color="warning"
                  onClick={() => setOpen(true)}/> 
                    <DeleteForever
                  variant="outline"
                  color="danger"
                  onClick={() => setOpen(true)}/> 
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Card>


    <React.Fragment>
      {/* <Button
        variant="outlined" sx={{m:1}}
        color="danger"
        endDecorator={<DeleteForever />}
        onClick={() => setOpen(true)}
      >
        Discard
      </Button> */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to discard all of your notes?
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => setOpen(false)}>
              Discard notes
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  
   
    </CssVarsProvider>
   
  );
}
