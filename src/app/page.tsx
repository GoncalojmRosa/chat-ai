import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className='bg-slate-50 flex min-h-screen items-center justify-center'>
      <Card className='w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>
            Chat AI
          </CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div>
            <Avatar>
              <AvatarFallback>GR</AvatarFallback>
              <AvatarImage src='https://github.com/goncalojmrosa.png'/>
            </Avatar>
          </div>
          <div>
          
          <Avatar>
              <AvatarFallback>GR</AvatarFallback>
              <AvatarImage src='https://github.com/openai.png'/>
            </Avatar>
          </div>
          <div>

          </div>
        </CardContent>
        <CardFooter className='space-x-2'>
          <Input placeholder='How can i help you?' type='text' />
          <Button type='submit'>Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
