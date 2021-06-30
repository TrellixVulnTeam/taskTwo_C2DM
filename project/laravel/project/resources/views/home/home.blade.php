
    
@foreach ($groubs as $key=>$value)

 <span style="background-color:red ;">   {{ $key }}  </span>
    <br>
    @foreach ($value as $v)
    <table>
    <tr><td> <a href="/info/{{ $v->id}}"> <button> {{ $v->name }} </button></a></td></tr>

</table>



@endforeach
<br>
@endforeach


