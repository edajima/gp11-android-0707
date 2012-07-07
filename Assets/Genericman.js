#pragma strict

private var die : boolean;
var gene : GameObject;

function Start () {

}

function OnCollisionEnter(obj : Collision)
{
	if(obj.gameObject.tag == "Player")
	{
		die = true;
	}
}

function Update () 
{
	if(!die)
	{
		animation.Play("Walk");
		transform.Rotate(0, 2, 0);
		
		if(transform.localScale.y < 0.1f)
		{
			transform.localScale += Vector3(0.1f, 0.1f, 0.1f);
		}
		
	}
	else
	{
		transform.localScale -= Vector3(0.1f, 0.1f, 0.1f);
		if(transform.localScale.y <= 0)
		{
			gene.SendMessage("ComeOn");
			Destroy(gameObject);
		}
	}

}