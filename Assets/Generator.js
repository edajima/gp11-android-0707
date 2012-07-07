#pragma strict

var enemy : GameObject;

function Start () 
{

}

function ComeOn()
{
	Instantiate(enemy, transform.position, Quaternion.identity);
}

function Update () 
{
	

}