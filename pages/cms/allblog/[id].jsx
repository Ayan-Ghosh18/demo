import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Card, CardMedia, CardContent, Paper, CircularProgress, Box, TextField, Button, Avatar } from '@mui/material';
import { product } from '@/api/axios/axios';
import { Cookies } from 'react-cookie';
import { useCreateComment, useGetComment, useGetsingleBlog } from '@/hooks/customHooks/cmsQuery.hooks';

const SingleBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const cookie = new Cookies();
  const user_id = cookie.get('_id');

  const { data: blog, isLoading: blogLoading, error: blogError } = useGetsingleBlog(id);
  const { data: comments, isLoading: commentsLoading, error: commentsError } = useGetComment(id);
  const createCommentMutation = useCreateComment();

  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    if (comment) {
      createCommentMutation.mutate({ user_id, blog_Id: id, comment });
      setComment('');
    }
  };

  if (blogLoading || commentsLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (blogError || commentsError) {
    return <Typography>Error: {blogError?.message || commentsError?.message}</Typography>;
  }
  const handleBack = () => {
    if (router.asPath !== '/') {
      router.back();
    } else {
      router.push('/fallback-page');
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
         
        </Box>

        <Container maxWidth="md" sx={{ py: 5 }}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
            <Card sx={{ boxShadow: 0 }}>
              <CardMedia
                component="img"
                image={product(blog?.image)}
                alt={blog?.title}
                height="auto"
                sx={{
                  borderRadius: 2,
                  maxHeight: { xs: 250, sm: 350, md: 400 },
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ textAlign: 'center', pt: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  {blog?.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                  {new Date(blog?.createdAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.8, textAlign: 'justify' }}>
                  {blog?.description}
                </Typography>
              </CardContent>
            </Card>
          </Paper>

          {/* <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Comments:</Typography>
        {comments?.length > 0 ? (
          comments.map((comment, index) => (
            <Paper key={index} elevation={2} sx={{ p: 2, mb: 2 }}>
              <Typography variant="body2">{comment.text}</Typography>
              <Typography variant="caption" color="text.secondary">
                {`- ${comment.name} on ${new Date(comment.createdAt).toLocaleDateString()}`}
              </Typography>
            </Paper>
          ))
        ) : (
          <Typography>No comments yet.</Typography>
        )}

        <Box sx={{ mt: 4 }}>
          <TextField
            label="Add a Comment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleCommentSubmit}
            disabled={!comment || createCommentMutation.isLoading}
          >
            Submit Comment
          </Button>
        </Box>
      </Box> */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Comments:</Typography>
            {comments?.length > 0 ? (
              comments.map((comment, index) => (
                <Paper key={index} elevation={2} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={comment.userName} src={comment.image || "/path/to/avatar.jpg"} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>{comment?.user_id?.name || "Anonymous"}</Typography>
                    <Typography variant="body2" color="text.secondary">{comment?.comment}</Typography>
                  </Box>
                </Paper>
              ))
            ) : (
              <Typography>No comments yet.</Typography>
            )}

            <Box sx={{ mt: 4 }}>
              <TextField
                label="Add a Comment"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCommentSubmit}
                disabled={!comment || createCommentMutation.isLoading}
              >
                Comment
              </Button>
            </Box>


          </Box>
        </Container>
        <Box>
        <Button style={{ marginTop: "20px", }}
            onClick={handleBack}
            variant="contained"
            color="secondary"
            size="large"
          >
            Go Back
          </Button>
        </Box>
      </div>
    </>
  );
};

export default SingleBlogPage;