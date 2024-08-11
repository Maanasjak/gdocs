'use server'

import { nanoid } from 'nanoid'
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';
import { error } from 'console';

export const createDocument = async ({userId, email}: CreateDocumentParams) => {
  const roomId = nanoid()

  try{
    const metadata = {
      createrId: userId,
      email,
      title: 'Untitled Document'
    }

    const usersAccesses: RoomAccesses = {
      [email]: ['room:write'],
    }

    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: ['room:write']
    });

    revalidatePath('/')

    return parseStringify(room)
  }catch(error){
    console.log(`Error occoured: ${error} while creating the room`)
  }
}

export const getDocument = async ({roomId, userId}: {roomId:string; userId: string}) => {
  try{
    const room = await liveblocks.getRoom(roomId)

    // const hasAcces = Object.keys(room.usersAccesses).includes(userId)

    // if(!hasAcces){
    //   throw new Error('You do not have acces to this room')
    // }

    return parseStringify(room)
  }
  catch(error){
    console.log(`Error happed ${error}`)
  }
}