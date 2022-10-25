import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation, route}) => {
  const {id} = route.params;
  const {state, editBlogPost} = useContext(Context);
  const blogToEdit = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{title: blogToEdit.title, content: blogToEdit.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
