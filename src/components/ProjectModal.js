import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Chip, Stack } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //   bgcolor: "background.paper",
  //   border: "2px solid #eee",
  //   p: 4,
  //   borderRadius: "12px",
  //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

export default function ProjectModal({ projectData, openModal, handleClose }) {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            sx={{ width: 550, height: 330, margin: '3rem', marginBottom: 0 }}
            image={projectData.imgurl}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {projectData.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {projectData.description}
            </Typography>
            <Stack direction="row" spacing={1} mt="8px">
              {projectData?.skills?.map((skill) => (
                <Chip
                  label={skill}
                  color="primary"
                  variant="outlined"
                  style={{ fontSize: '11px' }}
                />
              ))}
            </Stack>
          </CardContent>
          <CardActions>
            {projectData.liveUrl && (
              <Button
                endIcon={<LaunchIcon fontSize="small" />}
                size="large"
                style={{ fontSize: '12px' }}
                href={projectData.liveUrl}
                target="_blank"
              >
                See Live
              </Button>
            )}
            {projectData.demoUrl && (
              <Button
                endIcon={<LaunchIcon fontSize="small" />}
                size="large"
                style={{ fontSize: '12px' }}
                href={projectData.demoUrl}
                target="_blank"
              >
                See Demo
              </Button>
            )}
            {projectData.sourceUrl && (
              <Button
                endIcon={<LaunchIcon fontSize="small" />}
                size="large"
                style={{ fontSize: '12px' }}
                href={projectData.sourceUrl}
                target="_blank"
              >
                See Source
              </Button>
            )}
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
}
