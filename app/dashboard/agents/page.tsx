import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Agents = () => {
  return (
    <div>
<Tabs defaultValue="create-agent" className="w-full">
  <TabsList>
    <TabsTrigger value="create-agent">Create Agent</TabsTrigger>
    <TabsTrigger value="my-agent">My Agents</TabsTrigger>
  </TabsList>
  <TabsContent value="create-agent">Make changes to your account here.</TabsContent>
  <TabsContent value="my-agent">Change your password here.</TabsContent>
</Tabs>
    </div>
  )
}

export default Agents