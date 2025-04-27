import { Container } from "@/components";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="bg-center bg-cover bg-main">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-h1">Zaply</h1>
          <p className="text-b1R">Create once. Spread with Zaply</p>
          <Button variant="active">button</Button>
          <Button variant="deactive">button</Button>
          <Button variant="subAction">button</Button>
          <Button variant="active" size="sm">
            button
          </Button>
          <Button variant="deactive" size="sm">
            button
          </Button>
          <Button variant="subAction" size="sm">
            button
          </Button>
        </div>
      </div>
    </Container>
  );
}
