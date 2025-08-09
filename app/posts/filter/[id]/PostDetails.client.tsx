'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { fetchPostById, fetchUserById } from '@/lib/api';
import { User } from '@/types/user';

import css from './PostDetails.module.css';

export default function PostDetailsClient() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const parsedId = Number(id);

  const [user, setUser] = useState<User | null>(null);

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts', parsedId],
    queryFn: () => fetchPostById(parsedId),
    refetchOnMount: false,
  });

  useEffect(() => {
    if (!post) return;
    const fetchUser = async () => {
      try {
        const res = await fetchUserById(post.userId);
        setUser(res);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };
    fetchUser();
  }, [post]);

  const handleClickBack = () => {
    router.back();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <>
      {post && (
        <div className={css.container}>
          <div className={css.item}>
            <button className={css.backBtn} onClick={handleClickBack}>
              ← Back
            </button>

            <div className={css.post}>
              <div className={css.wrapper}>
                <div className={css.header}>
                  <h2>{post.title}</h2>
                </div>

                <p className={css.content}>{post.body}</p>
              </div>
              <p className={css.user}>Author: {user?.name || 'Unknown'}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
